class TodosController < ActionController::API
  wrap_parameters format: [:json]

  def index
    @todos = Todo.all
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
