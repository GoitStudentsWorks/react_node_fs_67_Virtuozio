import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { NoticeList, Text } from './NoticesCategoriesList.styled';

import { statusFilters } from '../../redux/notices/constans';

import {
  selectNotices,
  // selectStatusFilter
} from 'redux/notices/noticesSelectors';
import { Toaster } from 'react-hot-toast';
import { selectUser } from 'redux/auth/authSelectors';
import { selectFavoriteNotices } from 'redux/notices/noticesSelectors';

const getVisibeNotices = (notices, statusFilter, currentUser) => {
  switch (statusFilter) {
    case statusFilters.SELL:
      return notices.filter(notice =>
        notice.category.toLowerCase().includes(statusFilter.toLowerCase())
      );
    case statusFilters.LOST_FOUND:
      return notices.filter(notice =>
        notice.category.toLowerCase().includes(statusFilter.toLowerCase())
      );
    case statusFilters.IN_GOOD_HANDS:
      return notices.filter(notice =>
        notice.category.toLowerCase().includes(statusFilter.toLowerCase())
      );
    case statusFilters.FAVORITE_ADS:
      return notices;
    case statusFilters.MY_ADS:
      return notices.filter(notice => notice.owner === currentUser._id);
    default:
      return notices;
  }
};

const NoticesCategoriesList = () => {
  const notices = useSelector(selectNotices);
  const currentUser = useSelector(selectUser);
  const { categoryName } = useParams();
  const favNotices = useSelector(selectFavoriteNotices);
  console.log(favNotices);
  const visibleNotices = getVisibeNotices(notices, categoryName, currentUser);
  console.log(visibleNotices);

  
  return (
    <>
      <NoticeList>
        {notices.length > 0 ? (
          notices.map(item => (
            <NoticeCategoryItem
              key={item._id}
              notice={item}
              isFavorite={favNotices.includes(item._id)}
              // mobile={12}
              // tablet={6}
              // desktop={3}
            ></NoticeCategoryItem>
          ))
        ) : (
          <Text>Sorry, we can't find that</Text>
        )}

        <Toaster />
      </NoticeList>
    </>
  );
};

export default NoticesCategoriesList;
