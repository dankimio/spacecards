class ReviewsController < ApplicationController
  before_action :authenticate_user!, only: %i[update]
  before_action :set_study_session, only: %i[update]
  before_action :set_review, only: %i[update]

  def update
    if @review.update(review_params)
      render
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  private

  def set_study_session
    @study_session = current_user.study_sessions.find(params[:study_session_id])
  end

  def set_review
    @review = @study_session.reviews.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:answer)
  end
end
