'use client'

import React from 'react'
import { PageProps } from '@/app/common/types'
import { WebviewContainer } from '@/app/components/WebviewContainer'
import { apiClient } from '@/app/axios/apiClient'

const LoginPage = ({ os, app_version }: PageProps) => {
  const clientKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY
  const redirectUrl = process.env.NEXT_PUBLIC_BASE_URL + '/u/member/kakao'
  const kakaoLogin = () => {
    window.open(
      'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=' +
        clientKey +
        '&redirect_uri=' +
        redirectUrl,
    )
  }

  const naverLogin = () => {
    apiClient.post('/u/member', {
      platForm: 'NAVER',
      redirectUri: 'http://localhost:3000/login',
    })
  }
  return (
    <WebviewContainer>
      <div onClick={kakaoLogin}>kakaoLogin</div>
      <div onClick={naverLogin}>naverLogin</div>
    </WebviewContainer>
  )
}

export default LoginPage
