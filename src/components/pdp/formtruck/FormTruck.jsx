import css from "./FormTruck.module.css";
import { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Forma() {
    const inputRefs = useRef([]);
    const [startDate, setStartDate] = useState(null);
    const [open, setOpen] = useState(false);

    const handleDivClick = (index) => inputRefs.current[index]?.focus();

    const handleSubmit = (values, actions) => {
        toast.success("Your order is processed!");
        actions.resetForm();
        setStartDate(null);
    };

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        email: Yup.string().email("Must be a valid email!").required("Required"),
        bookingDate: Yup.date().required("Booking date is required"),
        comment: Yup.string().min(2, "Too Short!").max(300, "Too Long!"),
    });

    const fields = [
        { name: "name", type: "text", placeholder: "Name*" },
        { name: "email", type: "email", placeholder: "Email*" },
    ];

    return (
        <div className={css.form}>
            <div className={css.headerOfForm}>
                <h3>Book your campervan now</h3>
                <p className={css.textUnderHeader}>
                    Stay connected! We are always ready to help you.
                </p>
            </div>

            <ToastContainer />

            <Formik
                initialValues={{ name: "", email: "", comment: "", bookingDate: null }}
                onSubmit={handleSubmit}
                validationSchema={FeedbackSchema}
            >
                {({ setFieldValue }) => (
                    <Form className={css.inputs}>
                        <div className={css.wrapperForInputs}>
                            {fields.map((field, i) => (
                                <div key={field.name} className={css.inputField} onClick={() => handleDivClick(i)}>
                                    <Field
                                        className={css.input}
                                        {...field}
                                        innerRef={(el) => (inputRefs.current[i] = el)}
                                    />
                                </div>
                            ))}

                            <div className={css.inputFieldCalendar} onClick={() => setOpen((prev) => !prev)}>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => {
                                        setStartDate(date);
                                        setFieldValue("bookingDate", date);
                                        setOpen(false);
                                    }}
                                    placeholderText="Booking date*"
                                    className={css.inputCalendar}
                                    open={open}
                                    onClickOutside={() => setOpen(false)}
                                />
                            </div>

                            <div className={css.inputComent} onClick={() => handleDivClick(2)}>
                                <Field
                                    className={css.input}
                                    as="textarea"
                                    name="comment"
                                    placeholder="Comment"
                                    innerRef={(el) => (inputRefs.current[2] = el)}
                                    rows={4}
                                    style={{ resize: "none" }}
                                />
                            </div>

                            <div className={css.submit}>
                                <button className={css.submitButton} type="submit">
                                    Send
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Forma;
