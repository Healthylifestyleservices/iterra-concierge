import React from 'react';
import { useParams } from 'react-router-dom';
import { EducationalCourseHub } from '@/components/EducationalCourseHub';

export default function EducationPage() {
  const { associateId } = useParams<{ associateId?: string }>();

  return (
    <EducationalCourseHub associateId={associateId} />
  );
}