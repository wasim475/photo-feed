import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locale = ['bn', 'en']
let dafaultLocale = 'en'