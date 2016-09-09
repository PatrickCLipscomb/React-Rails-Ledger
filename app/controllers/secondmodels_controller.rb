class SecondmodelsController < ApplicationController
  def show
    @secondmodel = Secondmodel.find(params[:id])
    @firstmodel = Firstmodel.find(params[:firstmodel_id])
  end
  def edit
    @secondmodel = Secondmodel.find(params[:id])
    @firstmodel = @secondmodel.firstmodel
  end
  def new
    @firstmodel = Firstmodel.find(params[:firstmodel_id])
    @secondmodel = @firstmodel.secondmodels.new
  end
  def create
    @firstmodel = Firstmodel.find(params[:firstmodel_id])
    @secondmodel = @firstmodel.secondmodels.new(secondmodel_params)
    if @secondmodel.save
      flash[:notice] = "Secondmodel saved successfully"
      redirect_to firstmodel_path(@firstmodel)
    else
      flash[:alert] = "Secondmodel failed to save"
      render :new
    end
  end
  def update
    @secondmodel = Secondmodel.find(params[:id])
    @firstmodel = @secondmodel.firstmodel
    @secondmodel.update(secondmodel_params)
    flash[:notice] = "secondmodel updated successfully"
    redirect_to firstmodel_path(@firstmodel)
  end
  def destroy
    @secondmodel = Secondmodel.find(params[:id])
    @firstmodel = @secondmodel.firstmodel
    if @secondmodel.delete
      flash[:notice] = "Secondmodel deleted"
      redirect_to firstmodel_path(@firstmodel)
    else
      flash[:alert] = "Secondmodel failed to delete"
    end
  end
  private
  def secondmodel_params
    params.require(:secondmodel).permit(:name, :firstmodel_id)
  end
end
