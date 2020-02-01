import useSWR from 'swr'

// @ts-ignore
export const mockSWRResponse = (data?: any) => useSWR.mockImplementation(() => ({ data: { data } }))
