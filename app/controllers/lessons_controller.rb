class LessonsController < ApplicationController

    def index
       render json: Lesson.all
        
    end 

end
