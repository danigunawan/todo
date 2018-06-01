require 'securerandom'

class TodosController < ActionController::API
  acts_as_token_authentication_handler_for User, fallback: :none
  before_action :authenticate_user!, except: [:index]
  wrap_parameters format: [:json]

  def index
    @todos = Todo.all
    uuid = request.headers['X-UUID'] || SecureRandom.uuid
    uuid = SecureRandom.uuid if uuid.blank?
    fingerprint = request.headers['X-Fingerprint']
    p fingerprint
    response.set_header('X-UUID', uuid)
  end

  def create
    @todo = Todo.create(todo_params)
    head(:not_acceptable) unless @todo
  end

  def show
    todo
  end

  def update
    todo.update!(todo_params)
    head :no_content
  end

  def destroy
    todo.destroy
    head :no_content
  end

  private

  def todo
    @todo ||= Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo)
          .permit(:text, :completed)
  end
end
