import React from "react";
import { Form } from "react-router-dom";
import FormInput from "./FormInput";

const ShippingInformation = () => {
  return (
    <div className="mt-4">
      <h2 className="capitalize font-medium text-2xl">shipping information</h2>
      <Form method="post" className="flex flex-col mt-4 gap-y-4">
        <FormInput id="firstName" type="text" />
        <FormInput id="address" type="text" />
        <button type="submit" className="btn btn-primary">
          place order
        </button>
      </Form>
    </div>
  );
};

export default ShippingInformation;
