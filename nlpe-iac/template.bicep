param location string = 'italynorth'
param staticwebsite_location string = 'westeurope'
param github_org string = 'istat-methodology'
param github_repo string = 'nlp-explorer'
param github_repo_branch string = 'main'
param staticwebsite_name string = 'nlp-explorer'
param staticwebsite_sku_name string = 'Free'
param staticwebsite_sku_tier string = 'Free'
param custom_domains array = ['nlpe.statlab.it', 'www.nlpe.statlab.it']

resource staticwebsite_resource 'Microsoft.Web/staticSites@2023-01-01' = {
  name: staticwebsite_name
  location: staticwebsite_location
  sku: {
    name: staticwebsite_sku_name
    tier: staticwebsite_sku_tier
  }
  properties: {
    repositoryUrl: 'https://github.com/${github_org}/${github_repo}'
    branch: github_repo_branch
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    provider: 'GitHub'
    enterpriseGradeCdnStatus: 'Disabled'
  }
}

resource staticwebsite_basicauth 'Microsoft.Web/staticSites/basicAuth@2023-01-01' = {
  parent: staticwebsite_resource
  name: 'default'
  properties: {
    applicableEnvironmentsMode: 'SpecifiedEnvironments'
  }
}

resource staticwebsite_customdomains 'Microsoft.Web/staticSites/customDomains@2023-01-01' = [for domain in custom_domains: {
  parent: staticwebsite_resource
  name: domain
  properties: {}
}]
