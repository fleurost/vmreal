# Create the channel
docker exec peer0.org1.aryastorage.com peer channel create -o orderer.aryastorage.com:7050 -c composerchannel -f /var/hyperledger/channel-artifacts/channel.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/aryastorage.com/msp/tlscacerts/tlsca.aryastorage.com-cert.pem

# Join peer0.org1.example.com to the channel.
docker exec peer0.org1.aryastorage.com peer channel join -b composerchannel.block

# Join peer1.org1.example.com to the channel.
docker exec peer1.org1.aryastorage.com peer channel fetch config -o orderer.aryastorage.com:7050 -c composerchannel --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/aryastorage.com/msp/tlscacerts/tlsca.aryastorage.com-cert.pem
docker exec peer1.org1.aryastorage.com peer channel join -b composerchannel_config.block
