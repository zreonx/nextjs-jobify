import { ThemeProvider } from '@/components/theme-provider';

type ProvidersProps = {
  children: React.ReactNode;
};
function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}

export default Providers;
