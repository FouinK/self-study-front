'use client'

import React from 'react'
import { PageProps } from '@/app/common/types'
import { WebviewContainer } from '@/app/components/WebviewContainer'
import { apiClient } from '@/app/axios/apiClient'

const LoginPage = ({ os, app_version }: PageProps) => {
  const kakaoLogin = () => {
    console.log('여기')
    apiClient
      .post('/u/member', {
        platForm: 'KAKAO',
        redirectUri: '',
      })
      .then()
  }

  const naverLogin = () => {
    apiClient.post('/u/member', {
      platForm: 'NAVER',
      redirectUri: '',
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
