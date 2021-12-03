class TeachersController < ApplicationController

    # def index 
    #     render json: Teacher.all
    # end

    def show
        if current_user
            render json: current_user, status: :ok
        # else 
        #     render json: {}, status: :unauthorized 
        end 
    end

    def create 
        teacher = Teacher.create(teacher_params) 
        if teacher.valid?
            session[:teacher_id] = teacher.id   
            render json: teacher, status: :created
        else  
            render json: { errors: teacher.errors.full_messages }, status: :unprocessable_entity 
            end   
         
    end

    private 

    def teacher_params
        params.permit(:username, :password, :password_confirmation)
    end
end
