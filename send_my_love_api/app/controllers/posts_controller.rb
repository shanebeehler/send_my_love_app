class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all
    @recent_posts      = Post.most_recent(3)
    @city_count        = Post.city_count
    @country_count     = Post.country_count
    @count_all         = Post.count_all
    @count_per_city    = Post.count_per_city
    @count_per_country = Post.count_per_country
    @person_count      = Post.person_count

    render json: [@recent_posts, [@city_count, @country_count, @count_all, @count_per_city, @count_per_country, @person_count]]
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:name, :city, :country, :lat, :lng)
    end
end
