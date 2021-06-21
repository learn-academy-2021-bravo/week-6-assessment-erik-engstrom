# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostsController is a controller that is inheriting from ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) this will show all the blogs on the home/index page
    @posts = BlogPost.all
  end

  def show
    # ---3) this will show a particular blog post that belongs to the associated id number
    @post = BlogPost.find(params[:id])
  end

  # ---4) controller method new will return a new form for creating a new blog post
  def new
    @post = Post.new
  end

  def create
    # ---5) this will create a new blog post and refrences the blog_post_parmaeters to allow only what is required and permitted.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) the edit controller method will return a new form to edit the blog post
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) this will update/patch the edited blog post with the associated parameters
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) this will only run if the blog post was not properly deleted/destroyed and will take you back to the blog post that was not destroyed.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The user will not see this part and is used to set strong params on inputs to the database
  private
  def blog_post_params
    # ---10) this is saying the blog_post will only allow entries and updates to the title and content boxes.
    params.require(:blog_post).permit(:title, :content)
  end

end
