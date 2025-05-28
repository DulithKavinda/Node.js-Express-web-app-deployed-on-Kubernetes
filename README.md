# A simple Node.js + Express web app deployed on Kubernetes using Minikube.

## Project Structure

* `index.mjs`: Express server serving a static HTML page.
* `public/index.html`: Basic welcome UI with Kubernetes branding.
* `Dockerfile`: Container setup for the Node app.
* `deployment.yaml`: Kubernetes Deployment configuration.
* `service.yaml`: Kubernetes Service configuration for LoadBalancer exposure.

## Prerequisites

* [Docker](https://www.docker.com/)
* [Minikube](https://minikube.sigs.k8s.io/)
* [Kubectl](https://kubernetes.io/docs/tasks/tools/)
* A Docker Hub account (or another container registry)

## Getting Started

### 1. Start Minikube

```bash
minikube start
```

### 2. Enable Docker access for Minikube (optional: for local image usage)

```bash
eval $(minikube docker-env)
```

### 3. Build and push Docker image

Replace `dockerusername/reponame` with your actual Docker Hub repository.

```bash
docker build -t dockerusername/reponame .
docker push dockerusername/reponame
```

> Note: Skip `docker push` if you're using Minikube's local Docker environment (step 2).

### 4. Apply Kubernetes configuration

```bash
kubectl apply -f deployment.yaml -f service.yaml
```

### 5. Access the app

```bash
minikube service k8s-web-deployment
```

This will open the app in your default browser.

---

## Notes

* The app listens on port `3000` inside the container.
* Kubernetes service exposes it at port `3030`.
* You can modify `replicas` in `deployment.yaml` for scaling.


