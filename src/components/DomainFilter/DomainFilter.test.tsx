import DomainFilter from './DomainFilter.component';
import { render, screen } from '@testing-library/react';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      render(<DomainFilter domains={['do']} />);

      expect(screen.getAllByRole('listbox')).toHaveLength(3);
    })

    it('should render', async () => {
      render(<DomainFilter domains={['do']} />);

      expect(await screen.findByText('do')).toBeTruthy();
    });
    it ('should render complex domains', async () => {
      render(<DomainFilter domains={['US_OK-WOK', 'EN_OL-WOL']} />);

      expect(screen.findByText('US')).toBeTruthy();
      expect(screen.findByText('EN')).toBeTruthy();
      expect(screen.findByText('OK')).toBeTruthy();
      expect(screen.findByText('OL')).toBeTruthy();
      expect(screen.findByText('WOK')).toBeTruthy();
      expect(screen.findByText('WOL')).toBeTruthy();
    });
  })
})
