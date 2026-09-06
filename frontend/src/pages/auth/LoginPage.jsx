import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
	return (
		<div className='min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md text-center'>
				<img className='mx-auto h-24 w-auto' src='/logo.svg' alt='LinkedIn Clone' />
				<h1 className='mt-2 text-2xl font-bold text-gray-900'>LinkedIn Clone</h1>
				<p className='text-xs text-blue-700 font-semibold bg-blue-50 py-1 px-3 rounded-full inline-block mt-2'>
					Educational Demo Project
				</p>
				<h2 className='mt-4 text-center text-lg font-medium text-gray-700'>Sign in to your demo account</h2>
			</div>

			<div className='mt-6 sm:mx-auto sm:w-full sm:max-w-md shadow-md'>
				<div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
					<LoginForm />
					<div className='mt-6'>
						<div className='relative'>
							<div className='absolute inset-0 flex items-center'>
								<div className='w-full border-t border-gray-300'></div>
							</div>
							<div className='relative flex justify-center text-sm'>
								<span className='px-2 bg-white text-gray-500'>New to LinkedIn Clone?</span>
							</div>
						</div>
						<div className='mt-6'>
							<Link
								to='/signup'
								className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50'
							>
								Join now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LoginPage;
