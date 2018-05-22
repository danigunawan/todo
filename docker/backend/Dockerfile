FROM ruby:2.5.0

# Add nodejs 8.x repository
RUN curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh && \
    bash nodesource_setup.sh

# Install dependencies
RUN apt-get update \
    && apt-get -y install \
      build-essential \
      nodejs

# Install yarn #
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get -y install yarn

# Install cmake for rugged gem
RUN apt-get -y install cmake

# Git args
ARG BRANCH
ARG REPOSITORY

# Create .ssh dir
RUN mkdir -p /root/.ssh

# Copy ssh key
COPY ./id_rsa /root/.ssh/id_rsa

# Create known_hosts
RUN touch /root/.ssh/known_hosts

# Add github key
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts

# Set read only mode for id_rsa
RUN chmod 400 /root/.ssh/id_rsa

# Clone project
RUN git clone -b $BRANCH --single-branch $REPOSITORY /var/www/todo/

# Set workdir
WORKDIR /var/www/todo/

# Install yarn packages
RUN yarn install --network-timeout 1000000

# Install gems
RUN bundle install --without development test

