import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Options from './Options';

const testData = [
    {
        "lorem": "ipsum"
    },
    {
        "lorem": "dolor sit amat"
    }
];

describe('Options', () => {
    it('renders loading text when no data is provided', async () => {
        render(<Options data={[]} />);
        const loadingText = await screen.findByText(/Loading.../i);
        expect(loadingText).toBeTruthy(); // Use truthy assertion
    });

    it('renders correct information when data is provided', async () => {
        render(<Options data={testData} />);

        // Wait for loading text to disappear
        await waitFor(() => {
            const loadingText = screen.queryByText(/Loading.../i);
            expect(loadingText).toBeNull();
        });

        // Check if elements appear
        async function waitForElements() {
            for (const option of testData) {
                await waitFor(() => {
                    const strikePriceText = screen.findByText(`Lorem: $${option.lorem}`);
                    expect(strikePriceText).toBeTruthy();
                });
            }
        }

        await waitForElements();
    });
});
