FROM nginx:stable-alpine

ARG ENVIRONMENT

# Copy nginx congig
ADD conf/$ENVIRONMENT.default.nginx.conf /etc/nginx/nginx.conf

# Copy service config
ADD etc/$ENVIRONMENT.nginx.conf /etc/nginx/conf.d/service.conf

ADD script/entrypoint.sh /entrypoint.sh
ADD script/le.sh /le.sh

RUN \
 rm /etc/nginx/conf.d/default.conf && \
 chmod +x /entrypoint.sh && \
 chmod +x /le.sh && \
 apk add  --update certbot tzdata openssl && \
 rm -rf /var/cache/apk/*

CMD ["/entrypoint.sh"]
