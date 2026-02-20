import { describe, it, expect, vi, afterEach } from 'vitest';
import { getDeviceInfo } from './client-device';

describe('getDeviceInfo', () => {
    const originalUserAgent = navigator.userAgent;

    afterEach(() => {
        // Restore user agent after each test
        Object.defineProperty(navigator, 'userAgent', {
            value: originalUserAgent,
            writable: true
        });
    });

    it('should detect iPhone correctly', () => {
        const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1';
        Object.defineProperty(navigator, 'userAgent', {
            value: ua,
            writable: true
        });

        const info = getDeviceInfo();
        expect(info.vendor).toBe('Apple');
        expect(info.model).toBe('iPhone');
        expect(info.type).toBe('Mobile');
        expect(info.os).toContain('iOS');
        expect(info.browser).toContain('Mobile Safari');
    });

    it('should detect Samsung Device correctly', () => {
        const ua = 'Mozilla/5.0 (Linux; Android 13; SM-S911B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36';
        Object.defineProperty(navigator, 'userAgent', {
            value: ua,
            writable: true
        });

        const info = getDeviceInfo();
        expect(info.vendor).toBe('Samsung');
        expect(info.model).toBe('SM-S911B');
        expect(info.type).toBe('Mobile');
        expect(info.os).toContain('Android');
    });

    it('should detect Desktop Chrome on MacOS', () => {
        const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
        Object.defineProperty(navigator, 'userAgent', {
            value: ua,
            writable: true
        });

        const info = getDeviceInfo();
        expect(info.type).toBe('Desktop');
        expect(info.os).toContain('macOS');
        expect(info.browser).toContain('Chrome');
    });

    it('should handle unknown user agents gracefully', () => {
        const ua = 'UnknownBot/1.0';
        Object.defineProperty(navigator, 'userAgent', {
            value: ua,
            writable: true
        });

        const info = getDeviceInfo();
        expect(info.type).toBe('Desktop'); // Defaults to Desktop
        expect(info.vendor).toBeDefined();
    });
});
