import React, { FC, Fragment } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'

interface Props {
  count?: number
}

const LoadingListItem: FC<Props> = ({ count = 0 }) => {
  const components = []
  for (let index = 0; index <= count; index++) {
    components.push(
      <Card key={index} style={{ marginBottom: '1rem', height: 92 }}>
        <CardHeader
          avatar={<Skeleton animation="wave" variant="circle" width={40} height={40} />}
          title={<Skeleton animation="wave" height={10} width={120} style={{ marginBottom: 6 }} />}
          subheader={<Skeleton animation="wave" height={30} width="80%" />}
        />
      </Card>
    )
  }

  return <Fragment>{components}</Fragment>
}

export default LoadingListItem
