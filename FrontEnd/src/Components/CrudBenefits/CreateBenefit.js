import '../../App.css'
import './CreateBenefit.scss'
import { usePostToDatabase } from "./usePostToDatabase";
import { useNavigate } from "react-router-dom";
import { useGetBenefitsFromDatabase } from './useGetBenefitsFromDatabase';
import { maskCurrency } from '../../shared/moneyFormatTransform';
import validateBenefitForm from './validateBenefitForm'
import useForm from './useForm'

export const CreateBenefit = () => {
  const { submitBenefit } = usePostToDatabase();
  const { verifyNames } = useGetBenefitsFromDatabase();

  const navigate = useNavigate();
  const submit = async () => {
    const notExists = await verifyNames(formValues.Name);
    if (notExists === true) {
      submitBenefit(formValues.Name, formValues.Cost, formValues.Description);
      navigate("/benefits")
    } else {
      alert("That benefit already exits")
    }
  }
  const { formValues, handleInputChange, handleSubmit, errors } = useForm(submit, validateBenefitForm);
  return (
    <>
      <div className="benefits-form">
        <div className="form-title">
          <div className="image-benefit"></div>
          Create Benefit
        </div>
        <div className="form-group-benefits">
          <div className='Name-input'>
            <div className="animated-input">
              <input
                type="text"
                id="Name"
                className="animated-input__input"
                autoComplete="off"
                placeholder=" "
                maxLength={50}
                value={formValues.Name || ''}
                onChange={handleInputChange}
              ></input>
              <label htmlFor="Name" className="animated-input__label">Name<span className="req">*</span></label>
            </div>
            <label className="error-message" id="benefit-name">{errors.Name}</label>
          </div>
          <div className='Cost-input'>
            <div className="animated-input">
              <input
                type="text"
                id="Cost"
                className="animated-input__input"
                autoComplete="off"
                placeholder=" "
                maxLength={50}
                value={formValues.Cost || ''}
                onChange={(e) => { handleInputChange(maskCurrency(e)) }}
              ></input>
              <label htmlFor="Cost" className="animated-input__label">Cost<span className="req">*</span></label>
            </div>
            <label className="error-message" id="benefit-cost">{errors.Cost}</label>
          </div>
        </div>
        <div>
          <div className="animated-input">
            <textarea
              id="Description"
              className="animated-input__textarea"
              autoComplete="off" placeholder=" "
              maxLength={300}
              value={formValues.Description || ''}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="Description" className="animated-input__label">Description</label>
            <label className="error-message" id="benefit-description"></label>
          </div>
        </div>
        <div className="buttons">
          <button
            className="create-benefit-btn"
            onClick={handleSubmit}>
            create
          </button>
          <button
            className="cancel-benefit-btn"
            onClick={() => {
              navigate("/benefits")
            }}>
            cancel
          </button>
        </div>
      </div>
    </>
  )
};
