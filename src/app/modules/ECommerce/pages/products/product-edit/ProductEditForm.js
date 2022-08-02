// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import { Input } from "../../../../../../_metronic/_partials/controls";
// import {
//   AVAILABLE_COLORS,
//   AVAILABLE_MANUFACTURES,
//   ProductStatusTitles,
//   ProductConditionTitles,
// } from "../ProductsUIHelpers";

// Validation schema
// const ProductEditSchema = Yup.object().shape({
//   model: Yup.string()
//     .min(2, "Minimum 2 symbols")
//     .max(50, "Maximum 50 symbols")
//     .required("Model is required"),
//   manufacture: Yup.string()
//     .min(2, "Minimum 2 symbols")
//     .max(50, "Maximum 50 symbols")
//     .required("Manufacture is required"),
//   modelYear: Yup.number()
//     .min(1950, "1950 is minimum")
//     .max(2020, "2020 is maximum")
//     .required("Model year is required"),
//   mileage: Yup.number()
//     .min(0, "0 is minimum")
//     .max(1000000, "1000000 is maximum")
//     .required("Mileage is required"),
//   color: Yup.string().required("Color is required"),
//   price: Yup.number()
//     .min(1, "$1 is minimum")
//     .max(1000000, "$1000000 is maximum")
//     .required("Price is required"),
//   VINCode: Yup.string().required("VINCode is required"),
// });

export function ProductEditForm({
  product,
  btnRef,
  saveProduct,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
         initialValues={product}
        // validationSchema={ProductEditSchema}
        onSubmit={(values) => {
          saveProduct(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="name"
                    component={Input}
                    placeholder="Name"
                    label="Name"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    name="email"
                    component={Input}
                    placeholder="Email"
                    label="Email"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    name="password"
                    component={Input}
                    placeholder="Password"
                    label="Password"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-3">
                  <Field
                    name="eth"
                    component={Input}
                    placeholder="Ether Address"
                    label="Ether Address"
                  />
                </div>
                <div className="col-lg-3">
                  <Field
                    name="twitter"
                    component={Input}
                    placeholder="Twitter"
                    label="Twitter"
                  />
                </div>
                <div className="col-lg-3">
                  <Field
                    name="linkedin"
                    component={Input}
                    placeholder="LinkedIn"
                    label="LinkedIn"
                  />
                </div>
                <div className="col-lg-3">
                  <Field
                    name="discord"
                    component={Input}
                    placeholder="Discord"
                    label="Discord"
                  />
                </div>

              </div>
              <button
                type="submit"
                style={{ display: "none" }}
                ref={btnRef}
                onSubmit={() => handleSubmit()}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
