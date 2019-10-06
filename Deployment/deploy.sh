#!/bin/bash

# Printing Variables
tfenv=$1
divider=$(printf "%`tput cols`s"|tr ' ' '#')

# Iniitiate Printing Statements - Output environment being deployed
printf -v pEnv "Deploying Environment: %s" $tfenv
echo ${divider// /#}
echo $pEnv
echo ${divider// /#}

# Determine the environment being deployed from the inputted argument
case ${tfenv} in
  development)
    echo "Deploying Development"
    source ./Deployment/Variables/variables-development.sh
    ;;
  integration)
    echo "Deploying Integration"
    source ./Deployment/Variables/variables-integration.sh
    ;;
  live)
    echo "Deploying Live"
    source ./Deployment/Variables/variables-live.sh
    ;;
  *)
    echo "Could not determine a proper environment from inputted arguments."
    echo "Try again using either integration or live as an argument."
    exit
  ;;
esac

cd Terraform/AWS
terraform init
terraform apply
