# Set rails environment mode
rails_env = ENV['RAILS_ENV'] || 'development'
environment rails_env

if rails_env == 'production'
  # Specifies puma worker count
  workers 2

  # Specifies min and max threads per worker
  threads 1, 6

  # Specifies app directory
  app_dir = Rails.root
  shared_dir = app_dir.join('tmp')

  # Specifies socket location and binds to it
  socket_dir = shared_dir.join('sockets', 'puma.sock')
  bind "unix://#{socket_dir}"

  # Specifies logs location
  stdout_redirect app_dir.join('log', 'puma.stdout.log'), app_dir.join('log', 'puma.stderr.log'), true

  # Specifies master PID and state locations
  pidfile shared_dir.join('pids', 'puma.pid')
  state_path shared_dir.join('pids', 'puma.state')
  activate_control_app

  before_fork do
    ActiveRecord::Base.connection_pool.disconnect!
  end

  on_worker_boot do
    ActiveRecord::Base.establish_connection
  end
else
  # Specifies puma threads count
  threads_count = ENV.fetch('RAILS_MAX_THREADS') { 5 }
  threads threads_count, threads_count

  # Specifies the `port` that Puma will listen on to receive requests; default is 3000.
  port ENV.fetch('PORT') { 3000 }

  # Specifies the `environment` that Puma will run in.
  environment ENV.fetch('RAILS_ENV') { 'development' }

  # Allow puma to be restarted by `rails restart` command.
  plugin :tmp_restart
end
