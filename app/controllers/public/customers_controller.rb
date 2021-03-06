class Public::CustomersController < ApplicationController
  before_action :authenticate_customer!
  before_action :delete_session
  def show
    @customer = current_customer
  end

  def quit
    @customer = current_customer
  end

  def out
    @customer = current_customer
    @customer.update(customer_params)

    reset_session
    redirect_to root_path
  end

  def edit
    @customer = current_customer
  end

  def update
    @customer = current_customer
    if @customer.update(customer_params)
      redirect_to customers_path(@customer), notice: "更新に成功しました。"
    else
      render "edit"
    end
  end

  private
  def customer_params
    params.require(:customer).permit(:last_name, :first_name, :first_name_kana, :last_name_kana, :email, :postcode, :address, :tel, :is_active)
  end


end