param domain string
param cname_key string
param cname_value string

var cname_key_sanitized = endsWith(cname_key, domain) ? substring(cname_key, 0, length(cname_key) - length(domain) - 1) : cname_key

resource dns_zone 'Microsoft.Network/dnsZones@2018-05-01' existing = {
  name: domain
}

resource cname_record 'Microsoft.Network/dnsZones/CNAME@2018-05-01' = {
  parent: dns_zone
  name: cname_key_sanitized
  properties: {
    TTL: 3600
    CNAMERecord: {
      cname: cname_value
    }
  }
}
