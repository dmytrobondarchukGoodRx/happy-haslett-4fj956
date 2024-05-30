import { NavigationMenu } from "../navigation-menu"
import { AboutCard } from "./about-card"
import { ChildMenu } from "./child-menu"
import { EnjoyGold, ExploreGoldLarge, GoldListItem } from "./images"

const menu = ['Prescription savings', 'Telehealth', 'Health info', 'Gold membership'];

export const NavMenu = () => {
    return <div>
        <NavigationMenu items={menu}>
            <div className="grid grid-cols-4 gap-4">
                <AboutCard title="Prescription Savings" text="Stop paying too much for your prescriptions. Compare prices, get pharmacy coupons, and save up to 80%." buttonText="Get prescription savings" />
                <div className="flex flex-col gap-6">
                    <ChildMenu title="Ways to save" links={[
                        { text: 'Search for pharmacy coupons', href: "/hcp" },
                        { text: 'Get a prescription savings card', href: "/hcp" },
                        { text: 'Join GoodRx Gold', href: "/hcp" },
                        { text: 'Save on brand-name medications', href: "/hcp" },
                    ]} />
                    <ChildMenu title="Popular medications" links={[
                        { text: 'Sildenafil', href: "/drugs/sidenafil" },
                        { text: 'Levothyroxine', href: "/drugs/Levothyroxine" },
                        { text: 'Ventolin', href: "/drugs/Ventolin" },
                        { text: 'Proair', href: "/drugs/Proair" },
                        { text: 'Humira', href: "/drugs/Humira" },
                    ]} />
                </div>
                <div className="flex flex-col gap-6">
                    <ChildMenu title="Resources" links={[
                        { text: 'Pharmacies near you', href: "/drugs/sidenafil" },
                        { text: 'Find a Gold pharmacy', href: "/drugs/Levothyroxine" },
                        { text: 'GoodRx for pets', href: "/drugs/Ventolin" },
                        { text: 'Most prescribed medications', href: "/drugs/Proair" },
                    ]} />
                    <ChildMenu title="About GoodRx" links={[
                        { text: 'About us', href: "/hcp" },
                        { text: 'How GoodRx works', href: "/pharmacists" },
                        { text: 'How we help', href: "/pharmacists" },
                        { text: 'What we believe', href: "/pharmacists" },
                        { text: 'Our impact', href: "/pharmacists" },
                    ]} />
                </div>
                <div className="w-full">
                    <div className="rounded-xl border border-[#B7B7B7] flex flex-col gap-4 text-center p-4 ">
                        <h3 className="text-[#201F1B] font-medium text-lg">Browse medications</h3>
                        <p className="text-[#6A6A6A] text-sm font-normal">
                            Research prescriptions and over-the-counter <a className="underline text-[#0F56A6]" href="/drugs/directory">medications from A to Z</a>, compare drug prices, and start saving.
                        </p>
                        <div className="flex flex-wrap flex-row gap-4 justify-between">{"abcdefghijklmnopqrstuvwxyz".split('').map(c => (<a href={`/drugs/{c}`} className="hover:no-underline text-[#0F56A6] uppercase">{c}</a>))}</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <AboutCard title="Telehealth" text="Get professional, affordable online care from licensed healthcare professionals. Available nationwide starting at just $19." buttonText="Explore Telehealth" />
                <ChildMenu title="Popular treatments" links={[
                    { text: 'UTI (Urinary Tract Infection)', href: "/treatments/uti" },
                    { text: 'Erectile dysfunction', href: "/treatments/erectile" },
                    {
                        text: <span>Anxiety, stress, &amp; depression<br />medication refill</span>, href: "/drugs/anxiety"
                    },
                ]} />
                <ChildMenu title="&nbsp;" links={[
                    { text: 'Birth control', href: "/treatments/birth" },
                    { text: 'Acne treatment & prevention', href: "/treatments/acne" },
                    {
                        text: 'Short-term medication refill', href: "/treatments/short"
                    },
                    {
                        text: 'Start your online visit', href: "/treatments", isPrimary: true
                    },
                ]} />
                <div className="rounded-xl shadow-lg bg-white bg-clip-border flex flex-col gap-4 text-center p-4 ">
                    <div className="self-center"><EnjoyGold /></div>
                    <h3 className="text-[#201F1B] font-medium text-lg">Get more affordable care with Gold</h3>
                    <p className="text-[#6A6A6A] text-sm font-normal">
                        Access over 1K prescriptions that cost less than $10 and online visits starting at $19.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <AboutCard title="GoodRx Health" text="Find expert answers to your health questions so you can make the best decisions for yourself and your family." buttonText="Explore GoodRx Health" />

                <div className="flex flex-col gap-6">
                    <ChildMenu title="Health conditions" links={[
                        { text: 'Diabetis', href: "/treatments/uti" },
                        { text: 'Hypertension', href: "/treatments/erectile" },
                        { text: 'Allergies', href: "/treatments/erectile" },
                        { text: 'Autoimmune', href: "/treatments/erectile" },
                        { text: 'Show all topics', href: "/treatments/erectile", isPrimary: true },
                    ]} />
                    <ChildMenu title="Medications & treatments" links={[
                        { text: 'Medications', href: "/treatments/uti" },
                        { text: 'Classes of medications', href: "/treatments/erectile" },
                        { text: 'Medication comparisons', href: "/treatments/erectile" },
                        { text: 'Vaccines', href: "/treatments/erectile" },
                        { text: 'Show all topics', href: "/treatments/erectile", isPrimary: true },
                    ]} />
                </div>
                <div className="flex flex-col gap-6">
                    <ChildMenu title="Access & affordability" links={[
                        { text: 'Insurance', href: "/treatments/uti" },
                        { text: 'Medicare', href: "/treatments/erectile" },
                        { text: 'Telehealth', href: "/treatments/erectile" },
                        { text: 'Show all topics', href: "/treatments/erectile", isPrimary: true },
                    ]} />
                    <ChildMenu title="Well-being" links={[
                        { text: 'Sleep', href: "/treatments/uti" },
                        { text: 'Diet & nutrition', href: "/treatments/erectile" },
                        { text: 'Weight loss', href: "/treatments/erectile" },
                        { text: 'Show all topics', href: "/treatments/erectile", isPrimary: true },
                    ]} />
                </div>
                <ChildMenu title="More" links={[
                    { text: 'About GoodRx Health', href: "/treatments/uti" },
                    { text: 'Our editorial guidelines', href: "/treatments/erectile" },
                    { text: 'Newsletters', href: "/treatments/erectile" },
                    { text: 'Videos', href: "/treatments/erectile" },
                    { text: 'Research', href: "/treatments/erectile" },
                    { text: 'Pet health', href: "/treatments/erectile" },
                ]} />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <AboutCard title="GoodRx Gold" text="Our monthly healthcare membership can help you save thousands on your prescription costs." buttonText="Explore GoodRx Gold" />
                <ChildMenu title="Resources" links={[
                    { text: 'Find a Gold pharmacy', href: "/treatments/uti" },
                    { text: 'Gold FAQs', href: "/treatments/erectile" },
                ]} />
                <div className="rounded-xl shadow-lg bg-white bg-clip-border flex flex-row gap-4 text-left p-8 ">
                    <div className="self-center"><ExploreGoldLarge /></div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-[#201F1B] font-medium text-lg">Enjoy more savings & benefits with Gold</h3>
                        <ul className="text-[#6A6A6A] text-sm font-normal list-none flex flex-col gap-2">
                            <li className="flex flex-row gap-2"><GoldListItem /> Up to $2,862/yr in savings when you fill 2+ prescriptions a month</li>
                            <li className="flex flex-row gap-2"><GoldListItem /> Free home delivery on eligible medications</li>
                            <li className="flex flex-row gap-2"><GoldListItem /> Discounted virtual care visits for $19</li>
                        </ul>
                    </div>
                </div>
            </div>
        </NavigationMenu>
    </div>
}