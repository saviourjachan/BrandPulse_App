import React from 'react';

export const SettingsScreen: React.FC = () => {
    return (
        <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col group/design-root font-display bg-background-light dark:bg-black text-slate-900 dark:text-white">
            <div className="flex-1 pb-24">
                {/* Top App Bar */}
                <div className="sticky top-0 z-10 flex items-center bg-background-light/80 px-4 pt-4 pb-3 backdrop-blur-lg dark:bg-black/80">
                    <h2 className="flex-1 text-3xl font-bold tracking-tight">Settings</h2>
                </div>

                {/* Profile Header */}
                <div className="flex p-4">
                    <div className="flex w-full flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAcdXKaGNhezNsYX_i_hObnY15wXWxt1_4tSeXVCUhpNIQ__kccy1_KIF6IDr1CXDIVBjdA3Y0BSNqAv8AykhQiDMn0b9NSPGQxhiZo8iB4ICUgj1yiIAfMOYvqkA8tv-RF8eJc7PYYDRcZSO80M32jEm36-9PY7F_173iPs6E9aUPNJQNTTgsU4-POE1uzMiA8xtWqe6Y07syDeUwDzBNCA4lWNhnwvEFsWFmU1sVYx3JzB6S6wVHgbO7PexzKCdkVKUKrCxVXFc")' }}></div>
                            <div className="flex flex-col justify-center">
                                <p className="text-xl font-semibold">Aria Montgomery</p>
                                <p className="text-base text-gray-500 dark:text-gray-400">aria.m@brandpulse.ai</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preferences Section */}
                <div className="px-4">
                    <div className="overflow-hidden rounded-xl bg-white dark:bg-card-dark">
                        <div className="flex items-center justify-between gap-4 px-4 min-h-14">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white">
                                    <span className="material-symbols-outlined !text-[20px]">dark_mode</span>
                                </div>
                                <p className="text-base">Dark Mode</p>
                            </div>
                            <div className="shrink-0">
                                <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-gray-200 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary dark:bg-separator-dark">
                                    <div className="h-[27px] w-[27px] rounded-full bg-white transition-transform"></div>
                                    <input className="invisible absolute" type="checkbox" />
                                </label>
                            </div>
                        </div>
                        <div className="ml-16 h-px bg-gray-200 dark:bg-separator-dark"></div>
                        <div className="flex items-center justify-between gap-4 px-4 min-h-14">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white">
                                    <span className="material-symbols-outlined !text-[20px]">vibration</span>
                                </div>
                                <p className="text-base">Haptic Feedback</p>
                            </div>
                            <div className="shrink-0">
                                <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-gray-200 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary dark:bg-separator-dark">
                                    <div className="h-[27px] w-[27px] rounded-full bg-white transition-transform"></div>
                                    <input defaultChecked className="invisible absolute" type="checkbox" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 pt-4">
                    <div className="overflow-hidden rounded-xl bg-white dark:bg-card-dark p-4">
                        <p className="mb-3 text-base">Analysis Detail Level</p>
                        <div className="w-full">
                            <div className="flex w-full rounded-lg bg-background-light p-1 dark:bg-black">
                                <button className="flex-1 rounded-md py-1 text-sm font-medium text-gray-500 dark:text-gray-400">Standard</button>
                                <button className="flex-1 rounded-md bg-white py-1 text-sm font-medium text-primary shadow-sm dark:bg-separator-dark dark:text-primary">Detailed</button>
                                <button className="flex-1 rounded-md py-1 text-sm font-medium text-gray-500 dark:text-gray-400">Expert</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upgrade to Pro Card */}
                <div className="px-4 pt-8">
                    <div className="relative flex flex-col items-start justify-between gap-4 overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-500 p-6 text-white">
                        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10"></div>
                        <div className="absolute -bottom-12 -left-4 h-32 w-32 rounded-full bg-white/10"></div>
                        <div className="z-10">
                            <h3 className="text-2xl font-bold">Upgrade to Pro</h3>
                            <p className="mt-1 max-w-xs opacity-80">Unlock advanced analytics and competitor tracking.</p>
                        </div>
                        <button className="z-10 rounded-full bg-white px-5 py-2 text-sm font-semibold text-purple-600">Learn More</button>
                    </div>
                </div>

                {/* Information Section */}
                <div className="px-4 pt-8">
                    <div className="overflow-hidden rounded-xl bg-white dark:bg-card-dark">
                        <LinkItem title="About BrandPulse" />
                        <div className="ml-4 h-px bg-gray-200 dark:bg-separator-dark"></div>
                        <LinkItem title="Credits" />
                        <div className="ml-4 h-px bg-gray-200 dark:bg-separator-dark"></div>
                        <LinkItem title="Privacy Policy" />
                    </div>
                </div>

                {/* App Version Footer */}
                <div className="py-8 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">BrandPulse Version 1.0.2</p>
                </div>
            </div>
        </div>
    );
};

const LinkItem = ({ title }: { title: string }) => (
    <div className="flex cursor-pointer items-center justify-between gap-4 px-4 min-h-14 hover:bg-gray-50 dark:hover:bg-white/5">
        <p className="text-base">{title}</p>
        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
    </div>
);