// SettingsPage.tsx

import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { updateUserProfile } from '../../services/clerk';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
});

const SettingsPage: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await updateUserProfile(data);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" ref={register} placeholder="First name" />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <input name="lastName" ref={register} placeholder="Last name" />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <input name="email" ref={register} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default SettingsPage;