class Api::ProjectsController < ApplicationController

    before_action :require_logged_in
    
    def index
        @projects = Project.all
        render :index
    end

    def show
        @project = Project.find_by(id: params[:id])
        render :show
    end
    
    def create
        @project = Project.new(project_params)
        
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
    end
    
    def update
        @project = Project.find_by(id: params[:id])

        if @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @project = Project.find_by(id: params[:id])

        if @project.destroy
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end


    end


    private

    def project_params
        params.require(:project).permit(:project_name, :summary, :complete, :owner_id, :due_date)
    end


end
