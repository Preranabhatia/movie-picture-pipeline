# Screenshots required (capture fresh, from YOUR own AWS/EKS deployment of this exact commit)

| File name | What it must show |
|---|---|
| 01_Terraform_Plan_Validation.jpeg | `terraform plan` / validate output only |
| 02_Backend_CD_Success.jpeg | Backend Continuous Deployment run, all jobs green (lint, test, push to ECR, deploy) |
| 03_Frontend_CD_Success.jpeg | Frontend Continuous Deployment run, all jobs green |
| 04_Frontend_CI_Success.jpeg | Frontend CI run on a pull request: ESLint + Jest in parallel, then Build |
| 05_Backend_CI_Success.jpeg | Backend CI run on a pull request (from your current workflow) |
| 06_ECR_Images.jpeg | ECR repos `frontend` and `backend` showing the image tagged with the commit SHA |
| 07_EKS_Kubectl_Deployment_Output.jpeg | `kubectl get deployments,pods,services` + `kubectl rollout status` output |
| 08_Frontend_App.jpeg | Browser at the frontend LoadBalancer URL: movie list loaded, one movie selected with details shown |
| 09_Backend_Movies_JSON.jpeg | Browser/curl at `http://<backend-lb>/movies` showing the JSON `{"movies": [...]}` |
