/*
 * @Author       : 15257184434 g598670138@163.com
 * @Date         : 2023-01-15 09:39:33
 * @LastEditors  : 15257184434 g598670138@163.com
 * @LastEditTime : 2023-01-15 09:39:37
 * @FilePath     : \varlet-nuxt3-example\src\store\useUserStore.ts
 * @Description  : 
 * 
 * Copyright (c) 2023 by 15257184434 g598670138@163.com, All Rights Reserved. 
 */
import { defineStore } from 'pinia'

const USER_INFO = {
    userName: '易师傅',
    id: 1,
    sex: '男',
}

export const useUserStore = defineStore('userInfo', () => {

    const userInfo = reactive(USER_INFO)

    return {
        userInfo,
    }
})