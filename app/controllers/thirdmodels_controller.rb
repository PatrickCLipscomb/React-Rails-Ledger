class ThirdmodelsController < ApplicationController
  def show
    @thirdmodel = Thirdmodel.find(params[:id])
    @secondmodel = @thirdmodel.secondmodel
  end
  def edit
    @thirdmodel = Thirdmodel.find(params[:id])
    @secondmodel = @thirdmodel.secondmodel
  end
  def new
    @secondmodel = Secondmodel.find(params[:secondmodel_id])
    @thirdmodel = @secondmodel.thirdmodels.new
  end
  def create
    @secondmodel = Secondmodel.find(params[:secondmodel_id])
    @thirdmodel = @secondmodel.thirdmodels.new(thirdmodel_params)
    if @thirdmodel.save
      flash[:notice] = "Thirdmodel saved successfully"
      redirect_to secondmodel_path(@secondmodel)
    else
      flash[:alert] = "Thirdmodel failed to save"
      render :new
    end
  end
  def update
    @thirdmodel = Thirdmodel.find(params[:id])
    @secondmodel = @thirdmodel.secondmodel
    @thirdmodel.update(thirdmodel_params)
    flash[:notice] = "thirdmodel updated successfully"
    redirect_to secondmodel_path(@secondmodel)
  end
  def destroy
    @thirdmodel = Thirdmodel.find(params[:id])
    @secondmodel = @thirdmodel.secondmodel
    if @thirdmodel.delete
      flash[:notice] = "Thirdmodel deleted"
      redirect_to secondmodel_path(@secondmodel)
    else
      flash[:alert] = "Thirdmodel failed to delete"
    end
  end
  private
  def thirdmodel_params
    params.require(:thirdmodel).permit(:name, :secondmodel_id)
  end
end
