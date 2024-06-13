// Global types declaration
// global.d.ts

export {};

declare global {
  interface SearchParamsProps {
    searchParams: { [key: string]: string | undefined };
  }

  interface ParamsProps {
    params: { id: string };
  }

  interface CompleteParamsProps extends SearchParamsProps, ParamsProps {}
}