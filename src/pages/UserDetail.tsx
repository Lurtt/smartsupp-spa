import React, { FC, useState } from 'react'
import useSWR from 'swr'
import { useRouteMatch } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import Skeleton from '@material-ui/lab/Skeleton'

import { User as UserProps } from 'types/user'
import UserDetailCollapse from 'components/UserDetailCollapse'

export const Loading: FC = () => (
  <Card>
    <CardContent>
      <Skeleton animation="wave" width={100} height={14} />
      <Skeleton animation="wave" width={180} height={24} />
      <Skeleton animation="wave" width={200} height={14} />

      <Skeleton animation="wave" width={140} height={18} style={{ margin: '1rem 0' }} />

      <Skeleton animation="wave" width={120} height={18} />
      <Skeleton animation="wave" width={100} height={18} />
      <Skeleton animation="wave" width={80} height={18} />

      <Skeleton animation="wave" width={100} height={48} style={{ marginTop: '2rem' }} />
    </CardContent>
  </Card>
)

const UserDetail: FC = () => {
  const [expanded, setExpanded] = useState(false)
  const { params } = useRouteMatch()
  const { data: userResponse } = useSWR(`/users/${params.id}`, {
    suspense: true,
    revalidateOnFocus: false,
  })
  const { id, username, name, website, company, email, phone, address }: UserProps = userResponse.data

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card variant="outlined" data-testid="user-detail">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {username}
        </Typography>
        <Typography variant="h5" component="h2" color="textPrimary" display="block">
          {name}
        </Typography>

        <Typography variant="caption" color="secondary" display="inline" gutterBottom>
          {website}
        </Typography>
        <Typography variant="caption" color="secondary" display="inline" gutterBottom>
          {' / '}
        </Typography>
        <Typography variant="caption" color="secondary" display="inline" gutterBottom>
          {company.name}
        </Typography>
        <Typography variant="overline" display="block">
          {email}
        </Typography>
        <Typography variant="overline" display="block">
          {phone}
        </Typography>
        <Typography variant="caption" display="block">
          {address.street}, {address.suite}
        </Typography>
        <Typography variant="caption" display="block">
          {address.city}
        </Typography>
        <Typography variant="caption" display="inline" gutterBottom>
          {address.zipcode}
        </Typography>
      </CardContent>

      <CardActions>
        <Typography variant="button" display="inline">
          Show posts
        </Typography>
        <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <UserDetailCollapse expanded={expanded} userId={id} />
    </Card>
  )
}

export default UserDetail
