targetScope = 'subscription'

param location string
param staticwebsite_location string
param custom_domains array
param domain string
param suffix string
param dns_rg string
param resources_rg string

var staticwebsite_name = 'nlp-explorer${suffix}'

module resources_module 'resources.bicep' = {
  name: 'resources'
  scope: resourceGroup(resources_rg)
  params: {
    staticwebsite_name: staticwebsite_name
    location: location
    staticwebsite_location: staticwebsite_location
  }
}

module dns_records_module 'dns_cname.bicep' = [for i in custom_domains: {
  name: 'dns_cname_${i}'
  scope: resourceGroup(dns_rg)
  params: {
    domain: domain
    cname_key: i
    cname_value: resources_module.outputs.staticwebsite_hostname
  }
}]

module associate_custom_domain_module 'custom_domains.bicep' = {
  dependsOn: [
    dns_records_module
  ]
  name: 'associate_custom_domain'
  scope: resourceGroup(resources_rg)
  params: {
    custom_domains: custom_domains
    staticwebsite_name: staticwebsite_name
  }
}

#disable-next-line outputs-should-not-contain-secrets
output staticwebsite_token string = resources_module.outputs.staticwebsite_token
