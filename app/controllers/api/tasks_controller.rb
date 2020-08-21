class Api::TasksController < ApplicationController

    before_action :require_logged_in

    def index 
        @tasks = Task.all
        render :index
    end

    def show 
        @task = Task.find_by(id: params[:id])
    end

    def create
        @task = Task.new(task_params)

        if @task.save
            render :show
        else
            render json @task.errors.full_messages, status: 422
        end
    end

    def update
        @task = Task.find_by(id: params[:id])

        if @task.update(task_params)
            render :show
        else
            render jseon: @task.errors.full_messages, status: 422
        end
    end

    def destroy
        @task = Task.find_by(id: params[:id])

        if @task.destroy
            render :show
        else
            render json: @task.errors.full_messages, status: 422
        end

    end


 private

    def task_params
        params.require(:task).permit(
            :project_id, 
            :owner_id, 
            :creator_id,
            :task_name, 
            :description, 
            :start_date, 
            :due_date,
            :status
            )
    end

end
