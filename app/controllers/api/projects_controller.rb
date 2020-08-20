class Api::ProjectsController < ApplicationController

    before_action, :require_logged_in
    
    def index
        @projects = Project.all
        render :index
    end

    def show
        @project = project.find_by(id: params[:id])
        render :show
    end

    def new
    end
    
    def create
        @project = Project.new(project_params)

        if @project.save
            render :show
        else
            render json @project.errors.full_messages, status: 422
        end
    end

    def edit

    end

    def update
        @project = project.find_by(id: params[:id])
        # if @project.update_attributes
        # end
    end

    
    def destroy
    end


    private

    def project_params
        require(:project).permit(:owner_id, :start_date, :project_name, :summary, :due_date, :complete)
    end


end
