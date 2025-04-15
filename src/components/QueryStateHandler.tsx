import { ReactNode } from 'react';

type QueryStateHandlerProps = {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  children: ReactNode;
};

export default function QueryStateHandler({
  isLoading,
  isError,
  error,
  children,
}: QueryStateHandlerProps) {
  if (isLoading)
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  if (isError)
    return (
      <div className="alert alert-danger" role="alert">
        과제1 에러 발생: {(error as Error).message}
      </div>
    );

  return children;
}
