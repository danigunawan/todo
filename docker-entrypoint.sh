rm -rf tmp/pids/puma.pid tmp/pids/server.pid
rails db:create db:migrate
rails webpacker:compile
rails server
