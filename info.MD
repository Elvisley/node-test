
minikube delete

minikube start --driver=none

Install Argo CD: kubectl create namespace argocd
Install Argo CD: kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

Change the argocd-server service type to LoadBalancer: kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'

Login Using The CLI: kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

iDXsVAqpvStOxgDZ

======================================================================
======================================================================
======================================================================
======================================================================
======================================================================
======================================================================


minikube ip

minikube stop

minikube delete

minikube start

    minikube start --cpus 2 --memory 6000


kubectl delete pod <pod_name>


kubectl get services -o wide


kubectl get pods 
Lista todos os pods em execução da Namespace
kubectl get hpa 
Lista os escalonadores em execução da Namespace
kubectl get services Lista os serviços em execução da Namespace
kubectl get deploy Lista os deploy em execução da Namespace
kubectl get replicaset Lista os replicadores em execução da
Namespace
kubectl get all –all-namespaces Lista tudo que está executando dentro do
Minikube em todas Namespace
kubectl delete all --all Remove tudo que está executando no
Namespace

ERRO minukube ip 
exec sudo su -l $USER


kubectl scale deployment <name-deploy> --replicas=0 -n <namespace>


-----------------------------