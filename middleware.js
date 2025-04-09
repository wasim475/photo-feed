import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locales = ['bn', 'en']
let defaultLocale = 'en'

function getLocale(request) {
    const acceptedLanguage = request.headers.get('accept-language') ?? undefined
    let headers = {'accept-Language': acceptedLanguage}
    let languages = new Negotiator({headers}).languages()
    return match(languages, locale, defaultLocale)
}

export function middleware(request){
    const pathName = request.nextUrl.pathname
    const pathnameIsMissingLocale = locales.every(locale=> !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}/`)
}