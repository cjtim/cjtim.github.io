---
title: 'Rancher Kubernetes cluster on Oracle cloud'
pubDate: 2022-07-01
description: 'How I host my always-free K8S 4cpu, 24gb, 200gb disk'
image:
    url: '/assets/projects/k8s/arch.webp'
    alt: 'The full Astro logo.'
tags: ["rke", "kubernetes", "oracle cloud", "arm64"]
---

- [Free Tier Packages](#free-tier-packages)
- [My Setup](#my-setup)
- [What I've accomplished](#what-ive-accomplished)

I've always wanted to host my Kubernetes cluster in the cloud, but the cost has been a barrier for my home lab playground. Until I came across Oracle cloud always free Virtual machine!

## Free Tier Packages
<img src="/assets/projects/k8s/always-free.png" width="500px">

So, what do you get for free?
1. 4x ARM64 CPUs
2. 2x x86 CPUs
3. 1x Elastic Load Balancer
4. Elastic Block Storage (VM's disk)

## My Setup
1. 1x Elastic Load Balancer for incoming traffic and fault tolerance in case one of the nodes becomes unavailable.
2. VM setup includes **1x** 2-CPU ARM64 VM, **2x** 1-CPU ARM64 VMs, and 2 partitions on each VM (Linux system and Ceph partition) formatted using a cloud-init script:  
    <details class="cursor-pointer">
        <summary>Cloud-init</summary>
        This script helps create second partition (/dev/sdb) 25GB size. If original block storage is 100GB (outcome are 75GB and 25GB).

        #cloud-config
        bootcmd:
        - [cloud-init-per, once, move-second-header, sgdisk, --move-second-header, /dev/sda]
        - [cloud-init-per, once, create-ceph-part, parted, --script, /dev/sda, 'mkpart 2 25GB -1']
    </details>
2. RKE Kubernetes ecosystem
    * Cilium Ingress
    * Cert-manager
    * Rook Ceph for Persisten volumes
    * Grafana + Prometheus
    * Kubernetes Dashboard


## What I've accomplished

1. **Creating Infrastructure**: I started exploring Oracle Cloud and then transitioned to managing everything with Terraform.

2. **High Availability Kubernetes Cluster**: This 3-node Kubernetes cluster with external load balancers ensures that even if one node is unavailable, the other two can continue to serve requests.

3. **Automated SSL Renewal and DNS Registration**: As all wildcards of my domain (*.k8s.cjtim.com and *.cjtim.com) point to the Elastic Load Balancer, I've used cert-manager to handle wildcard certificates and automatic HTTPS securing of ingress under these domains.

4. **Controlling Kubernetes Cluster without KUBECONFIG Token (Auth0)**: Utilizing Auth0 and [oidc-login](https://github.com/int128/kubelogin) enables users to access the cluster without needing to store service account tokens on their computers, enhancing Kubernetes cluster security.
    ```yaml
    # RKE configuration file
    services:
        kube-api:
            extra_args:
                oidc-issuer-url: https://xxxx.us.auth0.com/
                oidc-client-id: xxxxxxxxxxxx
                oidc-username-claim: email
                oidc-groups-claim: k8s-roles
                oidc-groups-prefix: "oidc:"
    ```

Creating and managing a Kubernetes cluster on Oracle Cloud's always-free Virtual Machine offering has been an exciting journey.

One of the most interesting aspects of this project has been the implementation of Auth0 and [oidc-login](https://github.com/int128/kubelogin) to control access to the Kubernetes cluster without the need to store service account tokens on users' computers. This approach has not only simplified access but also elevated the cluster's security.

I hope you find the information shared in this post valuable for your own Kubernetes projects.