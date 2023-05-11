import {
  Box,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

const ShiftRegistration = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [deviceOption, setDeviceOption] = useState([""]);

  const initialValues = {
    shiftId: 0,
    name: "",
    start: "",
    end: "",
  };

  const userSchema = yup.object().shape({
    shiftId: yup.number().required("required").positive().integer(),
    name: yup.string().required("required"),
    start: yup.string().required("required"),
    end: yup.string().required("required"),
  });

  useEffect(() => {
    const getDeviceData = async () => {
      const res = await axios.get("http://192.168.29.5:8089/device/");
      setDeviceOption(res.data);
    };
    getDeviceData();
  }, []);

  return (
    <>
      <Header title="Shift Registration" />
      {/* <Box m="76px 20px 20px 235px"> */}
      <Formik
        //onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(data, { resetForm }) => {
          data.counterId = Number(data.counterId);
          //console.log("golmal" + data.counterId);
          console.log(data);
          let formData = new FormData();
          formData.append("counterId", data.counterId);
          formData.append("deviceId", data.deviceId);
          formData.append("macId", data.macId);
          formData.append("deviceTypeId", data.deviceTypeId);

          axios({
            method: "POST",
            url: "http://192.168.29.5:8089/device/add",
            data: data,
          })
            .then(function (res) {
              console.log(res);
              alert("Successfully signed up!");
            })
            .catch(function (res) {
              console.log(res);
            });
          resetForm({ data: "" });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box style={{ margin: "55px 20px 20px 20px" }}>
              <Grid
                container
                //rowSpacing={2}
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ margin: "50px, 5px" }}
              >
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Shift Id"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.shiftId}
                    name="shiftId"
                    error={!!touched.shiftId && !!errors.shiftId}
                    helperText={touched.shiftId && errors.shiftId}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Shift Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="time"
                    //label="On-Time"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.start}
                    name="start"
                    error={!!touched.start && !!errors.start}
                    helperText="Please Input Shift Starting Time"
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="time"
                    //label="On-Time"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.end}
                    name="end"
                    error={!!touched.end && !!errors.end}
                    helperText="Please Input Shift Ending Time"
                  />
                </Grid>
              </Grid>
            </Box>

            <Box display="flex" justifyContent="end" mt="20px" mr="22px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "25%", borderRadius: "16px" }}
              >
                Create New Device
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      {/* </Box> */}
    </>
  );
};

export default ShiftRegistration;
