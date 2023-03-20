import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { orderSelector } from '../../stores/reducers/OrderReducer'
import { paymentSelector } from '../../stores/reducers/PaymentReducer'
import { getOrderAsyncThunk } from '../../stores/thunks/OrderThunk'
import { createPaymentAsyncThunk } from '../../stores/thunks/PaymentThunk'

const OrderViewModel = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const { order } = useSelector(orderSelector)
  const { redirectUrl, isSuccess } = useSelector(paymentSelector)
  const navigate = useNavigate()
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      dispatch(getOrderAsyncThunk({
        id: params.orderId
      }))
    }, 1000)
    setLoading(false)
  }, [params.orderId, dispatch])

  useEffect(() => {
    dispatch(createPaymentAsyncThunk({
      orderId: params.orderId
    }))
  }, [dispatch])

  const navigateToPaymentPage = () => {
    setTimeout(() => {
      window.location.href = redirectUrl
    }, 1000)
  }

  return {
    order,
    loading,
    navigateToPaymentPage
  }
}

export default OrderViewModel